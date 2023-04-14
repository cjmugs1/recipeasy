import Link from 'next/link';
import PropTypes from 'prop-types';
import { AiOutlineRight } from 'react-icons/ai';

function ContactForm({ contactItems }) {
    return (
        <div className="contact-area md:pt-[145px] pt-[45px] border-[#595959] border-opacity-30 border-b md:pb-160 pb-[60px]">
            <div className="container">
                <div className="lg:grid lg:grid-cols-5">
                    <div className="contact-info lg:col-span-2 lg:pr-[15px]">
                        <h2 className="text-[48px] left-[58px] md:pb-[55px] pb-[35px]">
                            {contactItems[0]?.title}
                        </h2>
                        <h3
                            className="text-3xl leading-9 font-semibold"
                            dangerouslySetInnerHTML={{
                                __html: contactItems[0]?.subTitle,
                            }}
                        />
                        <ul className="text-[14px] leading-[27px] text-secondary pt-6">
                            <li className="pb-[15px] max-w-[270px]">
                                {contactItems[0]?.address}
                            </li>
                            <li className="pb-[15px]">
                                <Link
                                    href={`${contactItems[0]?.contactNumberPath}`}
                                >
                                    <a>{contactItems[0]?.contactNumber}</a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`${contactItems[0]?.contactEmailPath}`}
                                >
                                    <a>{contactItems[0]?.contactEmail}</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="button-wrap pt-[95px]">
                            <Link href="/contact">
                                <a className="inline-flex items-center text-[14px] leading-[30px] p-[11px_32px] transition duration-[0.4s] border border-[#969696] uppercase hover:border-black hover:bg-black hover:text-white">
                                    {contactItems[0]?.infoButtonText}
                                    <div className="ml-[5px]">
                                        <AiOutlineRight />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="contact-form lg:col-span-3 max-md:pt-[50px]">
                        <h2 className="text-[18px] leading-[22px] uppercase md:mb-[75px] mb-[35px]">
                            {contactItems[0]?.formTitle}
                        </h2>
                        <form>
                            <div>
                                <div className="lm:flex">
                                    <input
                                        className="w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] lm:mr-[20px]"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        required
                                    />
                                    <input
                                        className="w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px]"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    className="w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] mt-[35px]"
                                    placeholder="Here goes your message"
                                    id="message"
                                    rows="6"
                                    required
                                />
                            </div>

                            <div className="mt-[55px]">
                                <button
                                    type="submit"
                                    className="boxed-btn text-[14px] leading-[30px]"
                                >
                                    {contactItems[0]?.formButton}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContactForm.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactForm;
