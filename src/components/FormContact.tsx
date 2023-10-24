import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUsSchema } from "../pages/Contact/schema";
import type { IFormContact } from "../pages/Contact/types";

const defaultValues: IFormContact = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const FormContact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormContact>({
    resolver: yupResolver<any>(ContactUsSchema),
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const saveHandler = (event: IFormContact) => {
    const BodyValue =
      "First Name : " +
      event.firstName +
      "<br/> Last Name : " +
      event.lastName +
      "<br/> Email : " +
      event.email +
      "<br/> Message : " +
      event.message;
    var Email = {
      send: function (a) {
        return new Promise(function (n, e) {
          (a.nocache = Math.floor(1e6 * Math.random() + 1)),
            (a.Action = "Send");
          var t = JSON.stringify(a);
          Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
            n(e);
          });
        });
      },
      ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
          (a.onload = function () {
            var e = a.responseText;
            null != t && t(e);
          }),
          a.send(n);
      },
      ajax: function (e, n) {
        var t = Email.createCORSRequest("GET", e);
        (t.onload = function () {
          var e = t.responseText;
          null != n && n(e);
        }),
          t.send();
      },
      createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest();
        return (
          "withCredentials" in t
            ? t.open(e, n, !0)
            : "undefined" != typeof XDomainRequest
            ? (t = new XDomainRequest()).open(e, n)
            : (t = null),
          t
        );
      },
    };
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "billopasho56@gmail.com",
      Password: "6F44B8551B31A371B045BF46E7CBC835C530",
      To: "billopasho56@gmail.com",
      From: "billopasho56@gmail.com",
      Subject: "MEDIA ADVISORY EXPERTS",
      Body: BodyValue,
    }).then((message) => alert(message));
  };

  return (
    <>
      <section className="sm:pb-10 lg:mx-0 md:mx-10 sm:mx-3 sm:px-3">
        <div>
          <form
            className=" w-full max-w-[100rem] lg:px-0 "
            onSubmit={handleSubmit(saveHandler)}
          >
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  First Name
                </label>
                <Controller
                  control={control}
                  name="firstName"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <input
                      className="appearance-none block w-full text-gray-700 border border-[#d8d4d4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="First Name"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                {!!errors?.firstName ? (
                  <div className="text-xs text-red">
                    {errors?.firstName?.message}
                  </div>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Last Name
                </label>
                <Controller
                  control={control}
                  name="lastName"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <input
                      className="appearance-none block w-full text-gray-700 border border-[#d8d4d4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Last Name"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                {!!errors?.lastName ? (
                  <div className="text-xs text-red">
                    {errors?.lastName?.message}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  E-mail
                </label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <input
                      className="appearance-none block w-full text-gray-700 border border-[#d8d4d4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                {!!errors?.email ? (
                  <div className="text-xs text-red">
                    {errors?.email?.message}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Message
                </label>
                <Controller
                  control={control}
                  name="message"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <textarea
                      className="no-resize appearance-none block w-full text-gray-700 border border-[#d8d4d4] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  h-48 resize-none"
                      id="message"
                      placeholder="Please type your Message"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    ></textarea>
                  )}
                />
                {!!errors?.message ? (
                  <div className="text-xs text-red">
                    {errors?.message?.message}
                  </div>
                ) : null}
              </div>
            </div>
            <div
              className="g-recaptcha pb-2"
              id="rcaptcha"
              data-sitekey="6LdUxIUoAAAAAL9SEZiRTMSs6gfwk-QV2jRwfyr-"
            ></div>
            <span id="captcha" className="text-red"></span>
            <div className="flex  justify-center">
              <input
                type="submit"
                disabled={!isValid}
                className="h-10 w-32 text-lg bg-[#1E90FF] text-white rounded cursor-pointer"
                value="SEND"
              />
              <div className=""></div>
              {/* <div className="md:w-2/3"></div> */}
            </div>
          </form>
        </div>
      </section>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </>
  );
};
export default FormContact;
