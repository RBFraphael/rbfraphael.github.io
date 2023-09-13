import Image from "next/image";

import Logo from "@/assets/images/rbf-logo.svg"
import LogoLight from "@/assets/images/rbf-logo-light.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";

export default function Header()
{
    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Image src={LogoLight} alt="RBF" className="logo-light" />
                        <Image src={Logo} alt="RBF" className="logo" />
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-row gap-2 justify-content-end">
                            <Link href="https://linkedin.com/in/rbfraphael" target="_blank" title="LinkedIn" className="social-link">
                                <FontAwesomeIcon icon={faLinkedin} fixedWidth size="lg" />
                            </Link>
                            <Link href="https://github.com/rbfraphael" target="_blank" title="GitHub" className="social-link">
                                <FontAwesomeIcon icon={faGithub} fixedWidth size="lg" />
                            </Link>
                            <Link href="https://api.whatsapp.com/send?phone=5511969286032" target="_blank" title="WhatsApp" className="social-link">
                                <FontAwesomeIcon icon={faWhatsapp} fixedWidth size="lg" />
                            </Link>
                            <Link href="mailto:rbfraphael@gmail.com" target="_blank" title="Email" className="social-link">
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth size="lg" />
                            </Link>
                            <Link href="/resume.pdf" target="_blank" title="Download CV" className="social-link" download={"Raphael Batista Fontão.pdf"}>
                                <FontAwesomeIcon icon={faFilePdf} fixedWidth size="lg" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}