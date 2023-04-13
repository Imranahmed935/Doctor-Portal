import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";
import Loading from "../../../../Pages/Home/Home/Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`doctor ${doctor.name} deleted successfully`);
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">
        Manage Doctors : {doctors?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doctor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <th>
                  <button>
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="Confirmation-Modal"
                      className=" btn btn-sm"
                    >
                      delete
                    </label>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          handleDeleteDoctor={handleDeleteDoctor}
          modalData={deletingDoctor}
          closeModal={closeModal}
          title={`Make sure you want to delete?`}
          message={`if you delete ${deletingDoctor.name} it can't be undo.`}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
