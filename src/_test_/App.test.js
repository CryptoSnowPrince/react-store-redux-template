import App from '../App';
import { create } from 'react-test-renderer'

test( 'test', () => {
    let item = create( <App /> );
    expect( item.toJSON() ).toMatchSnapshot();
} );

test( 'test', () => {
    let item = create( <App /> );
    console.log( item.toJSON() );
    expect( item.toJSON().type ).toBe("div");
} );