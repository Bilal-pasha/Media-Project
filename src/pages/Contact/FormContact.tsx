import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactUsSchema } from './schema';
import type { IFormContact } from './types';

const defaultValues: IFormContact = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};
const FormContact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormContact>({
    resolver: yupResolver<any>(ContactUsSchema),
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  const saveHandler = (event: IFormContact) => {
    console.log('data', event);
  };

  return (
    <form
      className="container mx-auto w-full max-w-lg lg:px-0"
      onSubmit={handleSubmit(saveHandler)}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name
          </label>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { value, onChange, onBlur } }) => (
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter your First Name"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {!!errors?.firstName ? (
            <div className="text-xs text-red">{errors?.firstName?.message}</div>
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
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Enter your Last Name"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {!!errors?.lastName ? (
            <div className="text-xs text-red">{errors?.lastName?.message}</div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            E-mail
          </label>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange, onBlur } }) => (
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Enter your Email"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {!!errors?.email ? (
            <div className="text-xs text-red">{errors?.email?.message}</div>
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
                className="no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                placeholder="Enter your Message"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              ></textarea>
            )}
          />
          {!!errors?.message ? (
            <div className="text-xs text-red">{errors?.message?.message}</div>
          ) : null}
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            type="submit"
            disabled={!isValid}
            className="bg-skyblue text-white disabled:bg-gray font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
};
export default FormContact;
