import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col content-center">
      <p className="text-6xl font-bold text-primary self-center mt-4">
        <i class="fa-brands fa-nfc-symbol"></i> &nbsp;Tag-Yo
      </p>
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/private_files/lf30_l0spvjyv.json"
        style={{ height: "300px", width: "100%" }}
      ></Player>
      <br />
      <span className="p-8">
        Unlock the full potential of NFC tags with Tag-Yo - the ultimate tool
        for configuring{" "}
        <span className="font-bold italic text-primary">
          custom automations
        </span>{" "}
        and simplifying your daily routine.
      </span>
      <br />
      <Link className="self-center" to="/config">
        <button className="btn btn-wide btn-accent mt-2">Let's go</button>
      </Link>
    </div>
  );
};

export default Landing;
