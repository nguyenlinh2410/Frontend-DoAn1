import { getThongKeVe } from "../../services/VeService.js";
import "./QuanLyVe.scss"
import { useState,useEffect } from "react";

export default function getTKVe() {
  const [ves, setVe] = useState({
    total: 0,
    cho_xac_nhan:0,
    da_xac_nhan:0,
    da_huy:0
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try{
    const result = await getThongKeVe();
    console.log('check result: ',result)
    if(result.success){
      console.log('check data: ',result.data)
      setVe(result.data)
    }else{
      console.error("API error: ",result)
    }
  }catch(e){
    console.error('Erro fetching stats',e)
  }
  };

  

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Quản lý Vé tham quan
          </h1>
          <p className="text-gray-600">Xác nhận và quản lý các vé đặt trước</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="border-start border-5 border-primary p-1 mb-1 bg-light rounded">
            <p className="text-gray-600 text-sm">Tổng số vé</p>
            <p className="text-3xl font-bold text-gray-800">{ves.total}</p>
          </div>
          <div className="border-start border-5 border-warning p-1 mb-1 bg-light rounded">
            <p className="text-gray-600 text-sm">Chờ xác nhận</p>
            <p className="text-3xl font-bold text-yellow-600">
              {ves.cho_xac_nhan}
            </p>
          </div>
          <div className="border-start border-5 border-success p-1 mb-1 bg-light rounded">
            <p className="text-gray-600 text-sm">Đã xác nhận</p>
            <p className="text-3xl font-bold text-green-600">
              {ves.da_xac_nhan}
            </p>
          </div>
          <div className="border-start border-5 border-danger p-1 mb-1 bg-light rounded">
            <p className="text-gray-600 text-sm">Đã hủy</p>
            <p className="text-3xl font-bold text-red-600">{ves.da_huy}</p>
          </div>
        </div>
        </div>
        </div>

       
     
  );
}

// export default AdminQuanLyVe;
