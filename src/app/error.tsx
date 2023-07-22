"use client"; // Error components must be Client Components

import SignOut_Button from "@/components/SignOutButton";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <div className="text-center flex flex-col justify-center items-center gap-2 my-12">
                <h2>Something went wrong!</h2>
                <h6 className="text-sm font-light ">
                    {error.name}:{" "}
                    {error.message
                        .replace(/^(Error: )?/, "")
                        .replace(/\.?$/, ".")}
                </h6>
                <div className="text-base font-medium">
                    If you see this error again and it means you can not login
                    because of restrictions from spotify .{" "}
                </div>
                <div className="text-base font-medium">
                    Its is happening because of this app is in development mode
                    and still restricted by spotify to be used by only email
                    registered in spotify developer dashboard
                </div>
                <span className="text-lg font-medium text-green-500">
                    {" "}
                    if you want to use this app please contact me on <br />
                    please contact me on{" "}
                </span>
                <a href="https://twitter.com/Yashasewi">Twitter</a>{" "}
                <div className="w-20">
                    <SignOut_Button />
                </div>
            </div>
        </div>
    );
}
