import Head from "next/head";
import "@/styles/privacy-policy.scss";

export default function SmartBolsoPrivacyPolicyEN()
{
    return (
        <>
            <Head>
                <title>SmartBolso Privacy Policy</title>
            </Head>

            <main className="container">
                <div className="row py-5">
                    <div className="col-12">

                        <div className="mb-5">
                            <h1>Privacy Policy</h1>
                            <h2>Last Updated: February 1st, 2025</h2>
                        </div>
                        
                        <div className="mb-5">
                            <p>Welcome to <strong>SmartBolso</strong>! This Privacy Policy explains how we collect, use, and protect your information when using our app. SmartBolso is a personal finance manager that prioritizes your privacy and full control over your data.</p>
                        </div>
                        
                        <div className="mb-5">
                            <h2>1. Information Collection</h2>
                            <p>SmartBolso <strong>does not collect banking information</strong> and <strong>has no integration with banks or third-party services</strong>. All information entered is provided directly by you, including:</p>
                            <ul>
                                <li>Expenses and income manually recorded.</li>
                                <li>Categories and notes added to your records.</li>
                                <li>Account settings preferences.</li>
                            </ul>
                        </div>

                        <div className="mb-5">
                            <h2>2. Data Storage</h2>
                            <p>Your data is stored remotely on our servers, allowing access from different devices. No information is stored locally on your device.</p>
                        </div>
                        
                        <div className="mb-5">
                            <h2>3. Use of Information</h2>
                            <p>The data entered in SmartBolso is used exclusively to:</p>
                            <ul>
                                <li>Display your financial information within the app.</li>
                                <li>Ensure synchronization between your devices.</li>
                                <li>Improve user experience based on personal settings.</li>
                            </ul>
                        </div>
                        
                        <div className="mb-5">
                            <h2>4. Data Sharing</h2>
                            <p>SmartBolso <strong>does not share, sell, or transfer</strong> your data to third parties. Your information is accessible only to you.</p>
                        </div>
                        
                        <div className="mb-5">
                            <h2>5. Data Deletion</h2>
                            <p>You can request the deletion of all your data at any time. To do so, simply access the app settings or contact our support team. Once deleted, the data <strong>cannot be recovered</strong>.</p>
                        </div>
                        
                        <div className="mb-5">
                            <h2>6. Information Security</h2>
                            <p>We adopt security measures to protect your data from unauthorized access, alteration, disclosure, or improper destruction. However, please note that no system is completely invulnerable.</p>
                        </div>
                        
                        <div className="mb-5">
                            <h2>7. Changes to this Privacy Policy</h2>
                            <p>We may update this policy periodically. We will notify users of significant changes through the app or other appropriate means.</p>
                        </div>
                        
                        <div className="mb-5">
                            <h2>8. Contact</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us via email: <strong>support@smartbolso.com</strong>.</p>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}