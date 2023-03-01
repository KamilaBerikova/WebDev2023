export class Category {
    private _id: number = 0;
    private _name: string = "";
    private _productList: Array<Product> = new Array();

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    };

    public get id(): number {
        return this._id;
    };

    public set id(id: number) {
        this._id = id;
    };

    public get name(): string {
        return this._name;
    };

    public set name(name: string) {
        this._name = name;
    };

    public get productList(): Array<Product> {
        return this._productList;
    };

    public isProductAdded(prodId: number): boolean {
        return this._productList.findIndex(value => value.id == prodId) != -1? true : false;
    };

    public addProduct(product: Product): boolean {
        if (!this.isProductAdded(product.id)) return false;
        this._productList.push(product);
        return true;
    };

};

export class Product {
    private _id: number;
    private _name: string;
    private _imageURL: string;
    private _description: string;
    private _rating: number;
    private _kaspiURL: string;
    private _images: Array<string>;
    private _category: Category;
    private _likesNumber: number;
    private _isDeleted: boolean;

    constructor(
        id: number,
        name: string,
        imageURL: string,
        description: string,
        rating: number,
        kaspiURL: string,
        images: Array<string>,
        category: Category,
    ) {
        this._id = id;
        this._name = name;
        this._imageURL = imageURL;
        this._description = description;
        this._rating = rating;
        this._kaspiURL = kaspiURL;
        this._images = images;
        this._category = category;
        this._likesNumber = 0;
        this._isDeleted = false;
    };

    public get id(): number {
        return this._id;
    };

    public get name(): string {
        return this._name;
    };

    public get imageURL(): string {
        return this._imageURL;
    };

    public get description(): string {
        return this._description;
    };

    public get rating(): number {
        return this._rating;
    };

    public get kaspiURL(): string {
        return this._kaspiURL;
    };

    public get images(): Array<string> {
        return this._images;
    };

    public get category(): Category {
        return this._category;
    };

    public get likesNumber(): number {
        return this._likesNumber;
    };

    public get isDeleted(): boolean {
        return this._isDeleted;
    };

    public set isDeleted(isDeleted: boolean) {
        this._isDeleted = isDeleted;  
    };

    public deleteProd(): void {
        this._isDeleted = true;
    };

    public likeProduct(): void {
        this._likesNumber++;
    };
};
