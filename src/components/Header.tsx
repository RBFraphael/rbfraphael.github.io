import Image from "next/image";

import Logo from "@/assets/images/rbf-logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { Dropdown } from "react-bootstrap";

export default function Header()
{
    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-auto text-center text-lg-start mb-2 mb-lg-0">
                        <Image src={Logo} alt="RBF" className="logo" />
                    </div>
                    <div className="col-12 col-lg-auto">
                        <div className="d-flex flex-row gap-2 justify-content-center justify-content-lg-end">
                            <Link href="https://linkedin.com/in/rbfraphael" target="_blank" title="LinkedIn" className="social-link">
                                <FontAwesomeIcon icon={faLinkedin} fixedWidth size="lg" />
                            </Link>
                            <Link href="https://github.com/rbfraphael" target="_blank" title="GitHub" className="social-link">
                                <FontAwesomeIcon icon={faGithub} fixedWidth size="lg" />
                            </Link>
                            <Link href="https://medium.com/@rbfraphael" target="_blank" title="Medium" className="social-link">
                                <FontAwesomeIcon icon={faMedium} fixedWidth size="lg" />
                            </Link>
                            <Link href="https://api.whatsapp.com/send?phone=5511969286032" target="_blank" title="WhatsApp" className="social-link">
                                <FontAwesomeIcon icon={faWhatsapp} fixedWidth size="lg" />
                            </Link>
                            <Link href="mailto:rbfraphael@gmail.com" target="_blank" title="Email" className="social-link">
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth size="lg" />
                            </Link>
                            <Dropdown>
                                <Dropdown.Toggle className="social-link" title="Download CV">
                                    <FontAwesomeIcon icon={faFilePdf} fixedWidth size="lg" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="border-0 shadow-lg">
                                    <Dropdown.ItemText>English</Dropdown.ItemText>
                                    <Dropdown.Item href="/resume/RaphaelBatistaFontao_EN.pdf" target="_blank">&bull; Short version</Dropdown.Item>
                                    <Dropdown.Item href="/resume/RaphaelBatistaFontao_EN_Ext.pdf" target="_blank">&bull; Extended version</Dropdown.Item>
                                    <Dropdown.Item href="/resume/v2/Resume EN-US.pdf" target="_blank">&bull; Modern version</Dropdown.Item>
                                    
                                    <Dropdown.Divider />
                                    
                                    <Dropdown.ItemText>Portuguese</Dropdown.ItemText>
                                    <Dropdown.Item href="/resume/RaphaelBatistaFontao_PT-BR.pdf" target="_blank">&bull; Short version</Dropdown.Item>
                                    <Dropdown.Item href="/resume/RaphaelBatistaFontao_PT-BR_Ext.pdf" target="_blank">&bull; Extended version</Dropdown.Item>
                                    <Dropdown.Item href="/resume/v2/Currículo PT-BR.pdf" target="_blank">&bull; Modern version</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}