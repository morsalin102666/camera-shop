
const CameraBrand = () => {
    return (
        <div className="container mx-auto mt-[100px]">
            <div className="grid md:grid-cols-4 gap-[50px]">
                <div>
                    <img data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="w-[300px] h-[300px] rounded-full" src="https://www.lotte.co.kr/common/m/img/business/comp/L309_02.jpg" alt="" />
                </div>
                <div>
                    <img data-aos="fade-up"
                        data-aos-duration="3000" className="w-[300px] h-[300px] rounded-full" src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/05/02/sony-completes-745-million-stock-buyback-program_feature.jpg" alt="" />
                </div>
                <div>
                    <img data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className="w-[300px] h-[300px] rounded-full" src="https://media.istockphoto.com/id/1324928675/photo/olympus-canada-inc-head-office-in-richmond-hill-on-canada.jpg?s=612x612&w=0&k=20&c=VEKNx3EwUp4TIE_mXdmorI_6MA8-5Mn81nPkpZ6veyM=" alt="" />
                </div>
                <div>
                    <img data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500" className="w-[300px] h-[300px] rounded-full" src="https://direporter.com/wp-content/uploads/2021/07/Nikon-Inc-USA-HQ.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default CameraBrand;