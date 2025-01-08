import {NextPage} from 'next/types'

const ErrorPage: NextPage = () => {

    return <div className='w-full h-full flex flex-col justify-center items-center'>
        <span className="title text-6xl md:text-[7rem]">404 NOT FOUND</span>
        <span className="secondary-text text-baseblue text-lg md:text-xl">We’re sorry, but the page you’re looking for can’t be found</span>
    </div>

}

export default ErrorPage;