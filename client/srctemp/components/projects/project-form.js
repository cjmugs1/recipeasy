function ProjectForm() {
    return (
        <div className="project-form-area md:pt-[145px] pt-[45px] md:pb-160 pb-[60px]">
            <div className="container">
                <h2 className="text-[42px] leading-[50px] mb-[45px]">
                    Drop Us A Line
                </h2>
                <form className="project-form border-[#595959] border-opacity-30 border lm:p-[60px] p-[20px]">
                    <div className="md:flex">
                        <input
                            className="w-full border-[#595959] border-opacity-40 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-primary py-[15px] mr-[20px]"
                            placeholder="Full Name"
                            type="text"
                            id="name"
                            required
                        />
                        <input
                            className="w-full border-[#595959] border-opacity-40 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-primary py-[15px] mr-[20px]"
                            placeholder="Email Address"
                            type="email"
                            id="email"
                            required
                        />
                        <input
                            className="w-full border-[#595959] border-opacity-40 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-primary py-[15px]"
                            placeholder="Your Phone Number"
                            type="text"
                            id="phone"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            className="w-full border-[#595959] border-opacity-40 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-primary py-[15px] mt-[35px]"
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
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectForm;
