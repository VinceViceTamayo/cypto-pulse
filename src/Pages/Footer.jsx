export default function Footer() {
    return (
        <footer className="footer p-10 bg-gray-900 text-gray-300">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex items-center mb-8 md:mb-0">
                        <img className="h-8 w-auto mr-2" src="/cryptocurrency.png" alt="company_logo" />
                        <div>
                            <p className="text-2xl text-gray-300 font-bold">
                                CryptoPulse Industries Ltd.
                            </p>
                            <p className="text-sm text-gray-300">Providing reliable tech since 2021</p>
                        </div>
                    </div>
                <nav className="flex flex-col md:flex-row">
                    <div className="md:mr-8 flex flex-col">
                        <h6 className="footer-title text-xl font-bold text-gray-300">Services</h6>
                        <a href="#" className="link link-hover">Branding</a>
                        <a href="#" className="link link-hover">Design</a>
                        <a href="#" className="link link-hover">Marketing</a>
                        <a href="#" className="link link-hover">Advertisement</a>
                    </div>
                    <div className="md:mr-8 mt-4 md:mt-0 flex flex-col">
                        <h6 className="footer-title text-xl font-bold text-gray-300">Company</h6>
                        <a href="#" className="link link-hover">About us</a>
                        <a href="#" className="link link-hover">Contact</a>
                        <a href="#" className="link link-hover">Jobs</a>
                        <a href="#" className="link link-hover">Press kit</a>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col">
                        <h6 className="footer-title text-xl font-bold text-gray-300">Legal</h6>
                        <a href="#" className="link link-hover">Terms of use</a>
                        <a href="#" className="link link-hover">Privacy policy</a>
                        <a href="#" className="link link-hover">Cookie policy</a>
                    </div>
                </nav>
                </div>
                <hr className="my-8 border-gray-600" />
                <div className="text-center">
                    <p>&copy; 2024 CryptoPulse Industries Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}