import Logo from "@/assets/images/logo/logo.webp";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ProgressBar, { ProgressState } from "@/components/ProgressBar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaCheckCircle, FaCopy, FaEnvelope, FaExternalLinkAlt, FaGoogle, FaSignInAlt } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong, FaCircleXmark } from "react-icons/fa6";
import { update } from "react-spring";

interface FormProps {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsAccepted: boolean;
    accountUpdates: boolean;
    gameUpdates: boolean;
}

type Errors = Partial<Record<keyof FormProps, any>>;

export default function Portal() {
    const method = useParams().method;
    const isLogin = method == "login";
    const isRegister = method == "register";
    const router = useRouter();
    const goToLogin = () => router.replace("/portal/login");
    const goToRegister = () => router.replace("/portal/register");

    const [fade, setFade] = useState(true);
    const [transitioning, setTransitioning] = useState(false);


    // Multi-step form state
    const [step, setStep] = useState(1);
    const [targetStep, setTargetStep] = useState(1);
    const [stepStates, setStepStates] = useState<ProgressState[]>(
        [ProgressState.REACHED, ...Array(5).fill(ProgressState.NOT_REACHED)]
    );
    const [formData, setFormData] = useState<FormProps>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
        accountUpdates: true,
        gameUpdates: true,
    });
    const [error, setError] = useState<string>("");

    // Regex patterns
    const usernameRegex = /^[A-Za-z0-9_-]{5,16}$/;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,8}$/;
    const passwordLengthRegex = /^.{8,30}$/;
    const passwordLetterRegex = /[A-Za-z]/;
    const passwordNumberRegex = /\d/;
    const passwordSpecialCharRegex = /[^A-Za-z\d]/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,30}$/;

    const updateStepStates = (newStep: number, state: ProgressState) => {
        setStepStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[newStep - 1] = state;
            return newStates;
        });
    }

    // Validation functions
    const validateStep = () => {
        let newError: string = "";
        if (step === 1 && !usernameRegex.test(formData.username)) {
            newError = "Username must be between 5 and 16 characters long, must include only characters, numbers, underscore and hyphen.";
        }
        if (step === 2 && !emailRegex.test(formData.email)) {
            newError = "Please enter a valid email address";
        }
        if (step === 3) {
            if (!passwordRegex.test(formData.password)) {
                newError = "Password must be between 8 and 30 characters long, must include at least one letter, number and special character.";
            }
            if (formData.password !== formData.confirmPassword) {
                newError = "Passwords do not match";
            }
        }
        if (step === 4 && !formData.termsAccepted) {
            newError = "You must accept the Terms of Service";
        }
        setError(newError);
        return newError === "";
    };

    // Handle input changes
    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const nextStep = () => {
        if (transitioning) return;
        setTransitioning(true);
        // after fade-in:
        setTimeout(() => setTransitioning(false), 2000);
        if (validateStep()) {
            setTargetStep(step + 1);
            updateStepStates(step, ProgressState.OK);
            updateStepStates(step + 1, ProgressState.REACHED);
            setFade(false); // Start fade out
            setTimeout(() => {
                setStep((prev) => prev + 1);
                // Wait one frame to allow React to re-render with new step and opacity-0
                setTimeout(() => setFade(true), 10); // Trigger fade in
            }, 1000); // Match duration of fade-out (or slightly less than 500ms)
        } else {
            updateStepStates(step, ProgressState.ERROR);
        }
    };

    const prevStep = () => {
        if (transitioning) return;
        setTransitioning(true);
        // after fade-in:
        setTimeout(() => setTransitioning(false), 2000);
        updateStepStates(step, ProgressState.NOT_REACHED);
        setTargetStep(step - 1);
        setFade(false);
        setTimeout(() => {
            setStep((prev) => prev - 1);
            // Wait one frame to allow React to re-render with new step and opacity-0
            setTimeout(() => setFade(true), 10); // Trigger fade in
        }, 1000);
    };

    // Form content for each step
    const renderStep = () => {
        const texts = [
            'Choose a name for your Rival',
            'What\'s your email address?',
            'Choose a secure password',
            'Almost there...',
            'Please check your email for a verification link',
            'Account created successfully!'
        ]
        let stepElement = <></>;
        switch (step) {
            case 1:
                stepElement = (
                    <>
                        <Input
                            type="text"
                            name="username"
                            className="w-full"  
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </>
                );
                break;
            case 2:
                stepElement = (
                    <>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </>
                );
                break;
            case 3:
                const tests = [
                    { regex: passwordLengthRegex, message: "Between 8 and 30 characters long." },
                    { regex: passwordLetterRegex, message: "Include at least one letter." },
                    { regex: passwordNumberRegex, message: "Include at least one number." },
                    { regex: passwordSpecialCharRegex, message: "Include at least one special character." }
                ]
                const passwordsMatch = formData.password && formData.password === formData.confirmPassword;
                stepElement = (
                    <>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <Input
                            type="password"
                            name="confirmPassword"
                            placeholder="Password one more time"
                            value={formData.confirmPassword}
                            className="w-full"
                            onChange={handleInputChange}
                            required
                        />
                        <div className="flex flex-col items-start space-y-1 my-4 w-full text-xs md:text-sm">
                        {
                            tests.map((test, index) => {
                                const valid = test.regex.test(formData.password);
                                return <p key={index} className={`secondary-text inline-flex items-center space-x-2 transition-colors duration-700 ${valid ? "text-green-300" : "text-red-400"}`}>
                                    {valid ? <FaCheckCircle/> : <FaCircleXmark/>} <span>{test.message}</span>
                                </p>
                            })
                        }
                        <p className={`secondary-text inline-flex items-center space-x-2 transition-colors duration-700 ${passwordsMatch ? "text-green-300" : "text-red-400"}`}>
                            <FaCopy/> <span>Passwords must match.</span>
                        </p>
                        </div>
                    </>
                );
                break;
            case 4:
                stepElement = (
                    <>
                        <label className="flex items-center space-x-2 text-sky-200/[0.7] text-md secondary-text">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleInputChange}
                                className="form-checkbox text-sky-200"
                            />
                            <span>
                                I agree to the{" "}
                                <Link href="/legal/terms" target="_blank" className="text-sky-200 hover:text-white inline-flex items-center">
                                    Terms of Service <FaExternalLinkAlt className="text-xs mx-1"/>
                                </Link>
                            </span>
                        </label>
                        <label className="flex items-center space-x-2 text-sky-200/[0.7] text-md secondary-text mt-2">
                            <input
                                type="checkbox"
                                defaultChecked
                                name="accountUpdates"
                                checked={formData.accountUpdates}
                                onChange={handleInputChange}
                                className="form-checkbox text-sky-200"
                            />
                            <span>Receive account updates and notifications by email</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sky-200/[0.7] text-md secondary-text mt-2">
                            <input
                                type="checkbox"
                                name="gameUpdates"
                                defaultChecked
                                checked={formData.gameUpdates}
                                onChange={handleInputChange}
                                className="form-checkbox text-sky-200"
                            />
                            <span>Receive game updates and patch notes</span>
                        </label>
                    </>
                );
                break;
            case 5:
                stepElement = (
                    <>
                        <FaEnvelope className="text-[6rem] text-sky-200 animate-pulse"/>
                        <p className="text-sky-200/[0.7] text-sm md:text-md text-center my-5 secondary-text">
                            Can't find it? Check your spam folder or <a href="#" className="text-sky-200 hover:text-white">Resend mail</a>.
                        </p>
                    </>
                );
                break;
            case 6:
                stepElement = (
                    <>
                        <Button
                            type="main"
                            content="GO TO LOGIN"
                            Icon={FaSignInAlt}
                            onClick={goToLogin}
                        />
                    </>
                );
                break;
            default:
                return null;
        }
        return <>
            <p className="text-sky-200/[0.7] text-sm md:text-lg text-center my-4 secondary-text">
                {texts[step - 1]}
            </p>
            {stepElement}

            {step <= 4 && <div className="flex flex-row justify-center w-full">
                {step > 1 && <Button type="no-back" onClick={prevStep} Icon={FaArrowLeftLong} />}
                <Button type="main" onClick={nextStep} Icon={FaArrowRightLong} />
            </div>}
            <p className="text-red-400 text-sm md:text-md my-2 secondary-text">{error}</p>
        </>
    };

    return (
        <>
            <Head>
                <title>Portal - Rivalium: The Realm of Rivals</title>
            </Head>
            <main className="w-full h-screen min-h-screen relative flex justify-center items-center">
                <div className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-between">
                    <div
                        className={`h-full w-full md:h-[100%] sm:w-[60%] xl:w-[35%] bg-gradient-to-t md:bg-gradient-to-br from-backblue/90 via-sky-700/90 to-sky-700/10 md:to-sky-700/90 shadow-xl/40 p-4 sm:p-5 flex flex-col justify-between items-center`}
                    >
                        <div className="w-full flex flex-col items-center space-y-2 md:mb-4 mt-6 py-6">
                            <h1 className="text-4xl lg:text-6xl text-sky-200/[0.7] md:mb-6">
                                {isLogin ? 'LOG IN' : 'REGISTER FORM'}
                            </h1>
                            {isLogin ? (
                                <p className="text-sky-200/[0.7] text-xs sm:text-sm md:text-xl text-center my-10 secondary-text">
                                    Sign in to access your <span className="title text-lg sm:text-xl md:text-2xl">Rivalium</span> account.
                                </p>
                            ) : (
                                <p className="text-sky-200/[0.7] text-xs sm:text-sm md:text-xl text-center secondary-text">
                                    Welcome to <span className="title text-lg sm:text-xl md:text-2xl">Rivalium</span>
                                    <br/>
                                    <br/>
                                    Let's get you set up!
                                </p>
                            )}
                            </div>
                        
                        {!isLogin && (
                            <div className="w-[80%] flex flex-col items-center space-y-4 md:space-y-10 my-4 h-[45%] md:h-[60%]">     
                                <ProgressBar states={stepStates} />
                                <div 
                                key={step}
                                className={`flex flex-col items-center space-y-2 w-full relative transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}>
                                    {renderStep()}
                                </div>
                            </div>
                        )}
                        {isLogin && <div className="flex flex-col justify-center items-center w-full sm:w-[80%]">
                            <form className="w-full flex flex-col items-center space-y-3">
                                <Input type="username" placeholder="Username or Email" className="w-full" required />
                                <Input type="password" placeholder="Password" className="w-full" required />
                                <div className='flex flex-row items-between'>
                                    <Button type="main" content="SIGN IN" Icon={FaSignInAlt} />
                                    <Button
                                        type="main"
                                        content="SIGN IN WITH GOOGLE"
                                        Icon={FaGoogle}
                                        disabled
                                    />
                                </div>
                            </form>
                            
                            <p className="text-sky-200/[0.7] text-xs sm:text-xs md:text-sm text-center mt-4 secondary-text">
                                Forgot password?{" "}
                                <Link href="/portal/reset-password" className="hover:text-sky-100">
                                    Reset it
                                </Link>
                            </p>
                            <hr className="border-sky-200/[0.2] mt-1 mb-4 w-full" />
                            <Button
                                type="secondary"
                                content="REGISTER"
                                onClick={goToRegister}
                            />
                        </div>}
                        <div className="text-sky-200/[0.7]">
                            <ul className="text-xs md:text-sm secondary-text flex flex-row justify-center space-x-2">
                                <li><a href="/" className="hover:text-white">Home</a></li>
                                <li><a href="/legal/terms" className="hover:text-white">Terms of Service</a></li>
                                <li><a href="/patch-notes" className="hover:text-white">Server Status</a></li>
                                <li><a href="/support" className="hover:text-white">Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="hidden sm:w-[25%] md:flex md:h-full flex-col justify-between md:items-end p-10">
                        <Image src={Logo} alt="Rivalium Logo" className="w-[150px] sm:w-[300px] xl:w-[400px] filter drop-shadow-2xl/50" />
                        <h1 className="hidden md:inline text-right text-[2.6rem] sm:text-[6rem] xl:text-[7rem] text-center gloss-text">
                            {isLogin ? `LOGIN` : `REGISTER`}
                        </h1>
                    </div>
                </div>
            </main>
        </>
    );
}