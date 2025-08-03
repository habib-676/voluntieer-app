import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const RegPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/applications`,
        formData
      );
      console.log(data);
      if (data.insertedId) {
        toast.success("Thanks for registering! We'll be in touch soon.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      reset();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6  shadow-xl rounded-xl mt-10">
      <Helmet>
        <title>Registration || Intern or Volunteer</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center text-primary mb-6">
        Join as Intern or Volunteer
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label text-base-content">Full Name *</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
              placeholder="Jane Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="label text-base-content">Email *</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="input input-bordered w-full"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone & Role */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label text-base-content">Phone</label>
            <input
              {...register("phone")}
              className="input input-bordered w-full"
              placeholder="+8801XXXXXXXXX"
            />
          </div>

          <div>
            <label className="label text-base-content">Preferred Role</label>
            <select
              {...register("role")}
              className="select select-bordered w-full"
            >
              <option value="Intern">Intern</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Organizer">Organizer</option>
              <option value="Fundraiser">Fundraiser</option>
            </select>
          </div>
        </div>

        {/* Motivation */}
        <div>
          <label className="label text-base-content">
            Why do you want to join us?
          </label>
          <textarea
            {...register("motivation")}
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Your thoughts..."
          />
        </div>

        {/* Availability & Location */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label text-base-content">Availability</label>
            <select
              {...register("availability")}
              className="select select-bordered w-full"
            >
              <option value="Weekends Only">Weekends Only</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="label text-base-content">Location</label>
            <input
              {...register("location")}
              className="input input-bordered w-full"
              placeholder="City, Country"
            />
          </div>
        </div>

        {/* Social & File */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label text-base-content">
              LinkedIn / Portfolio
            </label>
            <input
              {...register("social")}
              className="input input-bordered w-full"
              placeholder="https://..."
              type="url"
            />
          </div>
        </div>

        {/* Consent */}
        <div className="form-control">
          <label className="label cursor-pointer text-base-content">
            <input
              type="checkbox"
              {...register("consent", {
                required: "You must agree to proceed.",
              })}
              className="checkbox mr-2"
            />
            <span className="label-text text-sm">
              I agree to the terms and allow my data to be used for this
              application.
            </span>
          </label>
          {errors.consent && (
            <p className="text-red-500 text-sm mt-1">
              {errors.consent.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegPage;
