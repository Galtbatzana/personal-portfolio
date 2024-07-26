const visible = true;
const LogoVisble = true; // false alga bolno


export function Davtalt() {
     
    const array = [1, 2, 3, 4];
   
    return (
        <div className="bg-slate-200 mx-auto">
            
            {array.map((item) => (
                <div key={item.id}>{item}</div> 

            ))}

        </div>
    );
};




    
