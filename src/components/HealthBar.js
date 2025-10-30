export default function HealthBar ({ health }) {
    return (
        <div className="health-bar">
            <div
                className="health-fill"
                style ={{
                    width: `${health}%`,
                    backgroundColor:
                        health > 70 ? "green" : health > 30 ? "gold" : "red",
                }}
        ></div>
        </div>
    );
};