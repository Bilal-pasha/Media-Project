import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUsSchema } from "../pages/Contact/schema";
import type { IFormContact } from "../pages/Contact/types";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const defaultValues: IFormContact = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const FormContact = () => {
  const [recapthavalue, setrecapthavalue] = useState();
  const [recapthatext, setrecapthatext] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormContact>({
    resolver: yupResolver<any>(ContactUsSchema),
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const saveHandler = async (event: IFormContact) => {
    const data = {
      Name: event.firstName,
      LastName: event.lastName,
      Email: event.email,
      Message: event.message,
    };
    if (!recapthavalue) {
      setrecapthatext(true);
    } else {
      setrecapthatext(false);

      async function postData(
        url = "https://exuberant-slug-outfit.cyclic.app/send-email"
      ) {
        const payload = JSON.stringify(data);

        try {
          const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: payload,
          });

          const res = response.text();
          res.then((res) => alert(res)).catch((err) => console.log(err));
        } catch (error) {
          console.log(error);
        }
      }
      await postData();
    }
  };
  return (
    <>
      <section className="sm:pb-10 lg:mx-0 md:mx-10 sm:mx-3 sm:px-3">
        <div>
          <form
            className="w-full max-w-[100rem] lg:px-0"
            id="form-data"
            onSubmit={handleSubmit(saveHandler)}>
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
            <div className="flex flex-wrap -mx-3">
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
                      placeholder="Please type your Message"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}></textarea>
                  )}
                />
                {!!errors?.message ? (
                  <div className="text-xs text-red">
                    {errors?.message?.message}
                  </div>
                ) : null}
              </div>
            </div>
            {/* <ReCAPTCHA
              sitekey="6LdUxIUoAAAAAL9SEZiRTMSs6gfwk-QV2jRwfyr-"
              onChange={(value: any) => setrecapthavalue(value)}
              className="my-4"
            /> */}
            {recapthatext && (
              <span id="captcha" className="text-red text-xs">
                this field is also required
              </span>
            )}
            <div className="flex justify-center">
              <input
                type="submit"
                disabled={!isValid}
                className="h-10 w-32 text-lg bg-[#1E90FF] text-white rounded cursor-pointer"
                value="SEND"
              />
            </div>
          </form>
        </div>
      </section>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </>
  );
};
export default FormContact;
