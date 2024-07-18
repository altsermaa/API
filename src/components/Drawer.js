import Link from 'next/link';


export const Drawer = ({ isOpen, closeDrawer }) => {
    return (
        <div
            className={`fixed top-0 left-[100%] ${isOpen ? "translate-x-[-300px]" : "translate-x-[0px]"
                } h-screen w-[300px] p-6 shadow-md bg-[#fff] duration-300 z-50`}
        >
            <button className='text-right' onClick={closeDrawer}>X</button>
            <div>
                <Link href={`/`}>
                    <h1 className='mb-50 border border-gray-500'>Home</h1>
                </Link>
                <Link href={`/blogsAll`}>
                    <h1>Blog</h1>
                </Link>
                <Link href={`/contact`}>
                    <h1>Contact</h1>
                </Link>
            </div>

        </div>
    );
};