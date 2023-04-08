import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Sheet from "react-modal-sheet";
import { Link } from "react-router-dom";

const Config = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div class="navbar bg-primary">
        <a class="btn btn-ghost normal-case text-xl text-base">
          <i class="fa-brands fa-nfc-symbol"></i> &nbsp; Tag-Yo
        </a>
      </div>
      <div className="flex flex-col">
        <span className="p-2 text-center font-bold italic">
          Place the NFC tag near the phone and scan
        </span>
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_joborrUseU.json"
          style={{ width: "100%" }}
        ></Player>
        <button
          onClick={() => {
            setTimeout(() => {
              setOpen(true);
            }, 2000);
          }}
          className="btn btn-wide btn-accent mt-2 self-center"
        >
          <i class="fa-brands fa-nfc-directional"></i> &nbsp; Scan
        </button>
        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <div className="flex flex-col">
                <Player
                  autoplay
                  loop
                  src="https://assets10.lottiefiles.com/packages/lf20_V6qqsk.json"
                  style={{ width: "90%" }}
                ></Player>
                <Link className="self-center" to="/automation">
                  <button className="btn btn-wide btn-accent mt-8 self-center">
                    Configure Automation
                  </button>
                </Link>
              </div>
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop />
        </Sheet>
      </div>
    </div>
  );
};

export default Config;
