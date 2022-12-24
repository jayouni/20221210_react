import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Main(){

    return (
    <div>
        <h1>Main</h1>
        <p>메인페이지 입니다</p>
        {/* <Routes>
            {/* 중첩 라우팅 */}
            {/* <Route path="1" element={<button>1</button>} />
            <Route path="2" element={<button>2</button>} />
        </Routes>  */}
        <Outlet />
    </div>
    
    );

}

export default Main;