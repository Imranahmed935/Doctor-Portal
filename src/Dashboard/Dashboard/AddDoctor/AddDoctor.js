import { useForm } from "react-hook-form";
import Loading from "../../../Pages/Home/Home/Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imgHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imgHostKey);

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleDoctor = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7">
      <h4 className="text-2xl font-semibold mb-5 ">Add Doctor</h4>
      <form onSubmit={handleSubmit(handleDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl text-black">Name</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="name"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p className="text-orange-700">{errors.name?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl text-black">Email</span>
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="text"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {errors.email && (
          <p className="text-orange-700">{errors.email?.message}</p>
        )}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl text-black">
              Pick a Specialty
            </span>
          </label>
          <div>
            <select
              {...register("specialty")}
              className="select input-bordered w-full max-w-xs mb-3"
            >
              {specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-control w-full max-w-xs mb-3">
          <label className="label">
            <span className="label-text text-xl text-black">
              Upload your photo
            </span>
          </label>
          <input
            {...register("img", { required: "Photo is required" })}
            type="file"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && (
            <p className="text-orange-700">{errors.img?.message}</p>
          )}
        </div>

        <input
          className="btn bg-success hover:bg-success border-none text-white w-full"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
