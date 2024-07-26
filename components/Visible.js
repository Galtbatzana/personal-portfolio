const visible = true;
const LogoVisble = true; // false alga bolno


export function Visible() {
    const title = "React Hicheel"; 
    
    if (!visible) {
        return null;
    }

    return (
        <div className="bg-slate-200 mx-auto">
            <div>{title}</div>
            <div>{LogoVisble ? <div>Turnary Operator</div>: <div>{title}</div>}</div>
            <div>{LogoVisble && "Mobile Menu"}</div>
        </div>
    );
};




    
