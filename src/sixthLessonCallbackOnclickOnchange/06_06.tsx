import React, {ChangeEvent, MouseEvent} from 'react';

function LessonSixth() {

    const names = ['Abc', 'Bca', 'Cbd', 'Fgr', 'Sre', 'Vfr'];
    const namesUser = [{name: 'Mike'}, {name: 'Nike'}, {name: 'Sasha'}, {name: 'Pasha'}, {name: 'Sre'}, {name: 'Vfr'}];
    const liElements = names.map((n, index) => <li key={index}>{n}</li>);
    const liElementsUser = namesUser.map((n, index) => <li key={index}>{n.name}</li>);

    const User = () => {

        const deleteUserNew = (event: MouseEvent<HTMLButtonElement>) => {
            alert(event.currentTarget.name);
        }

        const deleteUser = () => {
            alert('user was delete');
        }

        const saveUser = () => {
            alert('user was save');
        }

        const onChangeText = () => {
            alert('textarea change')
        }

        const onAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
            console.log('age change:' + event.currentTarget.value)
        }

        const focusLostHandler = () => {
            alert('focus lost')
        }

        return <div>
            <textarea
                onBlur={focusLostHandler}
                value={'Nikita'}
                onChange={onChangeText}>1</textarea>

            <input onChange={onAgeChange} type="number"/>
            {/*<div tabIndex={1}>and me blur</div>*/}

            <button onClick={deleteUser}>DELETE</button>
            <button onClick={saveUser}>SAVE</button>
            <div>
                <button name='delete' onClick={deleteUserNew}>x</button>
                <button name='save' onClick={deleteUserNew}>x</button>
            </div>

        </div>
    }

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
            <ul>
                {liElementsUser}
            </ul>
            <User/>
        </div>
    );
}

export default LessonSixth;
