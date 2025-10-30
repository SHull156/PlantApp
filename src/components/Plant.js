export default function Plant({ health, type }) {
    let stage = "🌱"; 

    if (health > 70) stage = "🌻";
    else if (health > 30) stage = "🌿";
    else stage = "🥀";


    if (type === "cactus") {
        stage = health > 70 ? "🌵" : health > 30 ? "🌵" : "🌵";
    } else if (type === "herb") {
        stage = health > 70 ? "🌿" : health > 30 ? "🌱" : "🥀";
    } 

    return <div className="plant">{stage}</div>;
}
