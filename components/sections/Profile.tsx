import React from "react";
import Image from "next/image";
const Profile = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        width={500}
        height={300}
        priority
        src="/johnsmith.svg"
        alt="John Smith"
        className="h-8 w-8"
      />
      <div>
        <p className="text-[#000000] text-base font-bold">John Smith</p>
        <p className="text-[#00000099] font-medium text-sm">15 March 2022</p>
      </div>
    </div>
  );
};

export default Profile;
