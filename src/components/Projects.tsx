import Image from "next/image";

import ErpFundacaoFatThumb from "@/assets/images/erp-fundacao-fat.jpg";
import CryopraxisThumb from "@/assets/images/cryopraxis.jpg";
import LocalHostThumb from "@/assets/images/local.host.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Projects()
{
    return (
        <section className="container projects py-5 my-5">
            <div className="row">
                <div className="col-12">
                    <div className="mb-5">
                        <div className="section-divider" data-aos="fade-up"></div>
                        <h2 className="display-2 fw-semibold mb-5" data-aos="fade-up">Latest projects</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-3 g-5">
                        <div className="col mb-5">
                            <div className="card project shadow-lg border-0 rounded-4" data-aos="slide-up">
                                <div className="card-body">
                                    <div className="project-thumb mb-3">
                                        <span className="close-button"></span>
                                        <span className="minimize-button"></span>
                                        <span className="maximize-button"></span>

                                        <Image src={ErpFundacaoFatThumb} alt="ERP - Fundação FAT" width={1280} height={720} unoptimized />
                                    </div>
                                    <h3 className="h2 text-primary">ERP Platform</h3>
                                    <h4 className="text-muted mb-3">Fundação FAT</h4>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Docker</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Laravel</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">MySQL</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">API</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">React</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">NextJS</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Bootstrap</span></li>
                                    </ul>
                                    <p>ERP platform for managing students, partner companies, enrollments, and financial matters of the courses administered by the FAT Foundation. Integrated with Santander bank, the system allows for comprehensive financial management, from the issuance of bank slips to the inquiry and clearance of titles. With a dedicated area, students can view and make advance payments.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col mb-5">
                            <div className="card project shadow-lg border-0 rounded-4" data-aos="slide-up">
                                <div className="card-body">
                                    <div className="project-thumb mb-3">
                                        <span className="close-button"></span>
                                        <span className="minimize-button"></span>
                                        <span className="maximize-button"></span>
                                        <Image src={CryopraxisThumb} alt="Wordpress Website - Cryopraxis" width={1280} height={720} unoptimized />
                                    </div>
                                    <h3 className="h2 text-primary">Wordpress Website</h3>
                                    <h4 className="text-muted mb-3">Cryopraxis</h4>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Wordpress</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Composer</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">MySQL</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">API</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">SASS</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Bootstrap</span></li>
                                    </ul>
                                    <p>Institutional website for the company Cryopraxis, with a custom theme and a personalized WordPress structure focused on robustness and stability, without the use of ready-made themes and plugins for site structure. Responsiveness and visual effects make this a modern and pleasant project. With lead management and advanced customization right from the dashboard, it&apos;s easy to update the site&apos;s content at any time.</p>
                                    <Link className="btn btn-light border-0 fw-bold" href="https://cryopraxis.com.br" target="_blank">
                                        View more <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col mb-5">
                            <div className="card project shadow-lg border-0 rounded-4" data-aos="slide-up">
                                <div className="card-body">
                                    <div className="project-thumb mb-3">
                                        <span className="close-button"></span>
                                        <span className="minimize-button"></span>
                                        <span className="maximize-button"></span>
                                        <Image src={LocalHostThumb} alt="Local.Host" width={1280} height={720} unoptimized />
                                    </div>
                                    <h3 className="h2 text-primary">Desktop application</h3>
                                    <h4 className="text-muted mb-3">Local.Host</h4>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Electron</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">React</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Next.JS</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Material UI</span></li>
                                        <li className="list-inline-item"><span className="badge bg-dark rounded-pill">Windows</span></li>
                                    </ul>
                                    <p>A developer-first desktop application for easily building development environments for PHP and/or JavaScript/TypeScript projects. As an alternative to <Link href="https://www.apachefriends.org/" target="_blank">XAMPP</Link>, it offers pre-configured SSL websites, dynamic VirtualHosts, integrated DNS proxy, multiple PHP versions, multiple NodeJS versions, command-line tools (like Composer and PHP CLI), MongoDB, Apache, MySQL and helpful tools (such as MongoDB Compass and HeidiSQL).</p>
                                    <Link className="btn btn-light border-0 fw-bold" href="https://github.com/rbfraphael/localdothost" target="_blank">
                                        View more <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}