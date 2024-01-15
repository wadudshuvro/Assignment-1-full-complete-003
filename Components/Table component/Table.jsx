import React from 'react';
import studentDetailsData from "./students.json";

const Table = () => {
  const studentDetails = studentDetailsData.studentDetails || [];
  const avatarPath = "/src/assets/avatar.png"; // path to the avatar image

  return (
    <div className="bg-[#172227] py-8">
    <div className="mt-8 max-w-[848px] mx-auto overflow-auto bg-[#172227]">
      <table className="w-full text-white">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="normal-case p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left	">ID</th>
            <th className="normal-case p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left	">Name</th>
            <th className="normal-case p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-center	">Scores</th>
            <th className="normal-case p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-center	">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.length > 0 ? (
            studentDetails.map((classDetails) => (
              <React.Fragment key={classDetails.class}>
                <tr className="bg-white/5">
                  <td colSpan="4" className="p-5 text-sm md:text-xl">
                    {classDetails.class} {/* Class name */}
                  </td>
                </tr>
                {classDetails.details.map((student) => (
                  <tr className="border-b border-[#7ECEB529]" key={student.id}>
                    <td className="p-5 text-sm md:text-xl">{student.id}</td>
                    <td className="p-5 text-sm md:text-xl">
                      <div className="flex items-center space-x-3">
                        <img src={avatarPath} alt="Avatar" className="w-8 h-8 rounded-full" />
                        <span>{student.name}</span>
                      </div>
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">{student.grade}</td>
                    <td className="p-5 text-sm md:text-xl text-center">{student.percentage}%</td>
                  </tr>
                ))}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-5 text-sm md:text-xl">No student data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Table;