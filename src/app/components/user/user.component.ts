import {Component} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    userlist = [];
    colors = [
        {
            id: 1,
            color: 'red'
        },
        {
            id: 2,
            color: 'orange'
        },
        {
            id: 3,
            color: 'yellow'
        },
        {
            id: 4,
            color: 'green'
        },
        {
            id: 5,
            color: 'blue'
        },
        {
            id: 6,
            color: 'indigo'
        },
        {
            id: 7,
            color: 'violet'
        },
    ];
    myModel = {
        name: '',
        age: '',
        fav_color: 'red'
    };
    onSubmit() {
        if (this.myModel.name !== '' && this.myModel.age !== '' && this.myModel.fav_color !== '') {
            const data = {
                name: this.myModel.name,
                age: this.myModel.age,
                fav_color: this.myModel.fav_color
            };
            this.userlist.push(data);
            this.myModel.name = '';
            this.myModel.age = '';
            this.myModel.fav_color = '';
        } else {
            alert('fill all fields');
        }
    }

    removeUser(username) {
        const user = this.userlist;
        for (let i = 0; i < user.length; i++) {
            if (user[i].name === username) {
                user.splice(i, 1);
            }
        }
    }
}
