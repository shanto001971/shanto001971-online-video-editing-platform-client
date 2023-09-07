import { useEffect, useRef, useState } from "react";
import SupportWindow from "../SupportWindow/SupportWindow";
import SideIcon from "../SideIcon";

const ChatModal = () => {
    const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
	function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			setVisible(false)
		}
	}
	document.addEventListener("mousedown", handleClickOutside);
	return () => {
		document.removeEventListener("mousedown", handleClickOutside);
	};
}, [ref]);	
    return (
        <div>
            <div ref={ref}>
        <SupportWindow visible={visible} />

        <SideIcon onClick={() => setVisible(true)} />
      </div>
        </div>
    );
};

export default ChatModal;