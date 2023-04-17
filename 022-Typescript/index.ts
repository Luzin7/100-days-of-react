const stringType: string = 'Victor';
const isBooleanType: boolean = true;
const numType: number = 21;
const regexType: RegExp = /abcde/;

const arrayOfString: string[] = stringType.split(' ');
const arrayOfNum: number[] = [1, 2, 7, 12];
const arrayMixed: (number | string | boolean)[] = [1, 2, 7, 'b', true];
const arrayMixedWithGenerics: Array<number | string | boolean> = [
	1,
	2,
	7,
	'b',
	true,
];

// uma forma de declarar objeto e sua tipagem/suas propriedades
const obj1: {
	name: string;
	age: number;
	isHuman: boolean;
} = {
	name: 'Victor',
	age: 21,
	isHuman: true,
};
// uma forma mais otimizada e reutilizável de decalar uma tipagem/propriedade de um obj
interface ObjectProp {
	name: string;
	age: number;
	isHuman: boolean;
}

const obj2: ObjectProp = {
	name: 'Victor',
	age: 21,
	isHuman: true,
};
