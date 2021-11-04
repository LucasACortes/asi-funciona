import { FunctionComponent, useState } from "react"

interface Props {
}

interface LinkedList {
    length: number
    head: ListElement | null
}

interface ListElement {
    value: number
    pointer: ListElement | null
}

interface toArray {
    element: ListElement
    array: number[]
}

const LinkedList: FunctionComponent<Props> = () => {
    const [linkedList, setLinkedList] = useState<LinkedList>({ length: 0, head: null });
    const [value, setValue] = useState<number>(0);
    const [max, setMax] = useState<number>(12);

    const getHeadRecursion = (element: ListElement, n: number): ListElement => {
        let add: ListElement = {...element};

        if (element.pointer && n !== 0) {
            add.pointer = getHeadRecursion({ ...element.pointer }, n - 1);
        } else {
            add.pointer = { value, pointer: null };
        }
        return add;
    }

    const getHTMLRecursion = (element: ListElement, n: number, array: number[]): toArray => {
        let add: ListElement = {...element};
        array.push(element.value);

        if (element.pointer && n !== 0) {
            add.pointer = getHTMLRecursion({ ...element.pointer }, n - 1, array).element;
        } else {
            add.pointer = { value, pointer: null };
        }
        return { element: add, array: array};
    }
    
    const getArrayOfList = (): number[] => {
        let array: number[] = [];
        if (linkedList.head) {
            array = getHTMLRecursion(linkedList.head, linkedList.length, array).array;
        }
        return array;
    }
    
    const addElement = (value: number): void => {
        let head: ListElement = { value: 0, pointer: null };
        let current: ListElement =  { value: 0, pointer: linkedList.head };

        if (linkedList.length === max) {
            return;
        }

        if (linkedList.length === 0) {
            head = { value, pointer: null };
            setLinkedList({ length: 1, head });
            return;
        }

        if (linkedList.head) {
            let length: number = linkedList.length;
            let element: ListElement | null = current.pointer;

            length++;
            current.pointer = { value, pointer: element };
            head = getHeadRecursion(linkedList.head, length);
            setLinkedList({ length, head });
        }
    }   

    const print = () => {
        console.log(linkedList);
    }

    return (
        <div className="linked-list">
            <h2>Linked List</h2>
            <div className="flex wrap">
                { getArrayOfList().map( (element, index, self) => 
                        <div className="flex align-center" key={index+element}>
                            <div className={`l-list-element ${index === 0 ? "first" : ""}`}>{element}</div>
                            <div className={`arrow ${index === self.length - 1 ? "hidden" : ""}`}> -&gt; </div>
                        </div>
                    )
                }
            </div>
            <input type="number" value={value} onChange={(event) => setValue(parseInt(event.target.value))}/>
            <button onClick={() => addElement(value)}>agregar</button>
            <button onClick={() => print()}>print</button>
        </div>
    )
}

export default LinkedList