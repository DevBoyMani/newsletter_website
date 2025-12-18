<>
  <div className="mt-8">
    <div className="px-[30px] py-[35px] bg-[#DAEBE8] rounded-[17px]">
      <p className="text-[#000] text-[22px] font-[700] leading-[141%]">
        How to apply
      </p>
      <div className="flex flex-row space-x-2 py-3">
        <div className="w-[85%]">
          <p className="text-[#000] text-[16px] font-[400] leading-[174%]">
            Send your CV, a motivational letter, and the completed assignment to{" "}
            <span
              className="underline cursor-pointer hover:text-blue-600 transition-colors duration-200"
              onClick={() => {
                const email = "careers@hourseofsummary.com";
                navigator.clipboard
                  .writeText(email)
                  // .then(() => {
                  //   alert(
                  //     `Email copied to clipboard: ${email}`
                  //   );
                  // })
                  .catch((err) => {
                    console.error("Failed to copy: ", err);
                    // Fallback for older browsers
                    const textarea = document.createElement("textarea");
                    textarea.value = email;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textarea);
                    alert(`Email copied to clipboard: ${email}`);
                  });
              }}
              title="Click to copy email"
            >
              careers@hourseofsummary.com
            </span>{" "}
            with the name of the position in the subject of the email.{" "}
            <strong>
              Note: We do not review applications without the assignment
            </strong>
            .
          </p>
        </div>
        <div className="md:w-[20%] w-full mt-6">
          <a
            href="mailto:careers@hourseofsummary.com"
            className="block text-center bg-[#01261E] hover:bg-[#014134] text-white text-[14px] font-[600] px-4 py-2 rounded-full w-full"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
  </div>
</>;
