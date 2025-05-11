import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SaleBanner() {
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    const picsumUrl = `https://picsum.photos/id/${randomImageId}/400/400`;

    return (
        <div className="bg-[#f4b728] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] mb-5 p-6 flex justify-between items-center mx-auto h-[220px]" style={{ width: '55%' }}>
            <div className="flex flex-row items-center w-full">
                <div className="relative w-1/3 h-full flex items-center justify-center" style={{ marginLeft: '50px' }}>
                    <img
                        src={picsumUrl}
                        alt="Random Product"
                        loading="lazy"
                        className="absolute w-40 h-40 object-cover rounded-lg opacity-90 drop-shadow-xl animate-float"
                    />
                </div>

                <div className="w-2/3 text-left pl-4" style={{ marginLeft: '35%' }}>
                    <h1 className="text-3xl font-black text-black leading-tight">
                        LARGEST SALE<br />THIS MONTH
                    </h1>
                    <p className="text-sm text-gray-700 mt-2">
                        Details of the product, like price and all.
                    </p>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        sx={{
                            mt: 2,
                            bgcolor: "white",
                            color: "black",
                            fontWeight: "bold",
                            textTransform: "none",
                            borderRadius: "8px",
                            "&:hover": {
                                bgcolor: "#f0f0f0",
                            },
                        }}
                    >
                        SEE MORE
                    </Button>
                </div>
            </div>
        </div>
    );
}
