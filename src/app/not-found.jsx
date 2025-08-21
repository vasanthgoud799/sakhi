import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 text-center">
      <Image src="./not-found.svg" alt="Not Found" width={500} height={500} />
      <h2 className="text-2xl font-semibold">
        Oops! The page you are looking for was not found.
      </h2>
      <p className="text-gray-500">
        It may have been moved or doesn’t exist anymore.
      </p>
      <Link href="/home">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
