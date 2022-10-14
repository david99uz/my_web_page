
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillGithub,
} from 'react-icons/ai';
const Footer = () => {
    const getCurrentYear = () => {

        return new Date().getFullYear()
    }
    return (
        <div className="justify-center  bg-sky-500 p-10 m-px-20 dark:bg-gray-900">
            <p className="text-xl dark:text-white">
                {getCurrentYear()}<span className="">&copy;</span>
                <span className="text-xl dark:text-white">
                    All Rights Reserved
                </span>

            </p>
            <p className="text-xl dark:text-white">Davron Mamatkuov</p>
            <br className="dark: bg-white h-1 w-1" />

            <div className="flex justify-center text-3xl gap-16 py-3 dark:bg-gray-900 ">
                <a cursor="pointer" href="
                https://www.linkedin.com/in/davron-mamatkulov-1139441aa/">
                    <AiFillLinkedin className="fill-white d" />
                </a>
                <a cursor="pointer" href="https://github.com/david99uz">
                    <AiFillGithub className="fill-white" />
                </a>
                <a cursor="pointer" href="https://www.instagram.com/daviduz99/">
                    <AiFillInstagram className="fill-white" />
                </a>
            </div>
        </div>
    )

}
export default Footer;