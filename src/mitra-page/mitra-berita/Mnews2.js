import Nav from "../../homepage/nav";
import Footer from "../../homepage/footer";
import img1 from './assets/foto2.jpeg'

const Mnews2 = () => {
    return ( 
        <>
        <Nav/>
        <div className="flex flex-col my-8 mx-12">
            <h1 className="text-3xl text-blue-600 border-b-2 border-gray-500 font-semibold">Mitra</h1>
            <div className="flex flex-col my-4">
                <div className="my-4">
                    <h1 className="text-blue-600 text-2xl ">Pertemuan dengan SMKN 1 Banjit Riset Mengenai Produktivitas Kopi</h1>
                    <h5 className="text-sm text-gray-500">Pertemuan dengan SMKN 1 Banjit Riset Mengenai Produktivitas Kopi</h5>
                </div>
                <div className="flex flex-row gap-7 my-2">
                    <img src={img1} alt="" className="w-[300px]" />
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Mnews2;