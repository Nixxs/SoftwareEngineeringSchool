const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' },
]

function SingleCat(props){
    return (<li>
        {props.name} ({props.latinName})
    </li>
    );
}

function BigCats(props){
    let id = 0;
    return (
        <div className="componentBox">
            <ul>
                {cats.map(function(cat) {
                    id += 1;
                    return (                      
                        <SingleCat
                            key={id} 
                            name={cat.name}
                            latinName={cat.latinName}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default BigCats