import githubLogo from "../assets/github.png";
import vue from "../assets/vue.png";
import reactlogo from "../assets/react.svg";
import terminal from "../assets/terminal.png";
import gear from "../assets/gear.png";

export default function Highlights({ image, date, text }) {
    return (
        <div className="bg-cardalts border rounded-lg border-cardbg">
            <div className="flex gap-4 my-8 mx-5">
                <img
                    src={image}
                    alt=""
                    className="h-auto max-w-14 object-contain"
                />
                <div className="flex flex-col items-start">
                    <p className="text-graytext font-mono">{date}</p>
                    <h4 className="font-medium">{text}</h4>
                </div>
            </div>
        </div>
    );
}
