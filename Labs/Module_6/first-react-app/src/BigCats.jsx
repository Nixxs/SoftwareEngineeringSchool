import { useState } from "react"

let catsData = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' },
]

function SingleCat(props){
    const handleRemoveCat = () => {
        props.onRemoveCat({name:props.name, latinName:props.latinName})
    } 

    return (<li>
        {props.name} ({props.latinName}) <button onClick={handleRemoveCat}>Remove</button>
    </li>
    );
}

function AddCatForm(props){

    const handleSubmit = (event) => {
        event.preventDefault();
        const rawFormData = new FormData(event.target)
        const newCatData = Object.fromEntries(rawFormData);

        props.onAddCat({name: newCatData.catname, latinName: newCatData.catlatinname})
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Cat Name: 
                <input name="catname" type="text" />
            </label><br/>
            <label>Latin Name: 
                <input name="catlatinname" type="text" />
            </label><br/>
            <button>Submit</button>
        </form>
    )
}

function BigCats(props){
    const [cats, setCats] = useState(catsData);
    const sortCats = () => {
        let newCats = [...cats].sort().reverse();
        setCats(newCats);
    }
    const filterCats = () => {
        let filterString = document.getElementById("catFilterInput").value.toLowerCase();
        let newCats = [...catsData].filter(cat => cat.latinName.toLowerCase().includes(filterString));
        setCats(newCats);
    }
    const resetCats = () => {
        setCats(catsData);
    }
    const addCat = (newCat) => {
        const updatedCats = [...catsData, newCat];
        catsData = updatedCats;
        setCats(catsData);
    }
    const removeCat = (catToRemove) => {
        const updatedCats = catsData.filter(
            function (cat){
                return cat.name != catToRemove.name && cat.latinName != catToRemove.latinName;
            }
        );
        console.log(updatedCats)
        catsData = updatedCats;
        setCats(catsData);
    }

    let id = 0;
    return (
        <div className="componentBox">
            <button onClick={sortCats}>Sort</button>
            <button onClick={filterCats}>Filter</button>
            <button onClick={resetCats}>Reset</button><br/>
            <input type="text" id="catFilterInput"></input>
            <ul>
                {cats.map(function(cat) {
                    id += 1;
                    return (                      
                        <SingleCat
                            key={id} 
                            name={cat.name}
                            latinName={cat.latinName}
                            onRemoveCat={removeCat}
                        />
                    )
                })}
            </ul>
            <AddCatForm onAddCat={addCat}/>
        </div>
    );
}

export default BigCats