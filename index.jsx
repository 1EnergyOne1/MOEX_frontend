        const user = {
            id : 5,
            age: 29,
            firstName: 'Tony',
            lastName: 'Energy',
            getFullName: function(){ 
                return `${this.firstName} ${this.lastName}`;
            }
        };
        ReactDOM    
            .createRoot(document.getElementById("app"))
            .render(
                <div id={user.id}>
                    <p>Полное имя: {user.getFullName()}</p>
                    <p>Возраст: {user.age}</p>
                    <p>Время генерации данных: {new Date().toLocaleTimeString()}</p>
                </div>
            );