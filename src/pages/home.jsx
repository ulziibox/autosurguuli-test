import React from "react";
import {Card} from "../components/card-home";
import "./style.css";

const HomePage = () => {
    return (
        <div className="home-body">
            <div className="cards">
                <Card 
                    title="Сэдвийн тест" 
                    description="Нийт 800 асуултыг сэдэв бүрээр нь ангилж бэлдсэн онлайн тест" 
                    href="/topic-test"/>
                <Card 
                    title="Шалгалтын тест" 
                    description="Улсын шалгалттай адилаар 20 минутын хугацаанд түүвэр 20 асуултанд хариулна" 
                    href="/exam-test"/>
            </div>
        </div>
            
    )
};

export default HomePage;