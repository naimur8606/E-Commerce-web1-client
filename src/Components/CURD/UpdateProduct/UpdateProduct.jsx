import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id, brand_name, description, name, photo, price, rating, category } = product;
    console.log(product)

    const addProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.Brand_name.value;
        const category = form.categories.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const product = { name, brand_name, category, price, rating, photo, description }
        console.log(product);
        
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="md:p-24 bg-[url('https://i.ibb.co/18M4yx4/sd-banner.png')] mx-auto bg-center bg-cover bg-blend-overlay bg-[#000] bg-opacity-10 py-8">
            <h2 className="text-3xl font-extrabold text-white mb-5 text-center">Update Product Details</h2>
            <form onSubmit={addProduct} className='w-11/12 md:w-full mx-auto'>
                <div className="md:flex md:md:mb-8">
                    <div className="form-control md:w-1/2">
                        <span className="label-text text-black text-lg">Product Name</span>
                        <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full bg-white" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <span className="label-text text-black text-lg">Brand Name</span>
                        <input type="text" name="Brand_name" defaultValue={brand_name} placeholder="Banner Title" className="input input-bordered w-full bg-white" required />
                    </div>
                </div>

                <div className="md:flex md:mb-8">
                    <div className="form-control md:w-1/2">
                        <span className="label-text text-black text-lg">Photo URL</span>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full bg-white" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <span className="label-text text-black text-lg">Category</span>
                        <select name="categories" required id="" className="input input-bordered w-full">
                            <option value="Fashion & Apparel">{category}</option>
                            <option value="Fashion & Apparel">Fashion & Apparel</option>
                            <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                            <option value="Home Makeover">Home & Makeover</option>
                            <option value="Sports & Outdoors">Sports & Outdoors</option>
                            <option value="Books & Stationery">Books & Stationery</option>
                            <option value="Groceries & Food">Groceries & Food</option>
                        </select>

                    </div>
                </div>

                <div className="md:flex md:mb-8">
                    <div className="form-control md:w-1/2">
                        <span className="label-text text-black text-lg">Price</span>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full bg-white" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <span className="label-text text-black text-lg">Rating</span>
                        <input type="text" name="rating" defaultValue={rating} placeholder="Ratting Value" className="input input-bordered w-full bg-white" required />
                    </div>
                </div>

                <div className="md:mb-8">
                    <span className="label-text text-black text-lg">Description</span>
                    <textarea className='p-3 w-full rounded-lg' defaultValue={description} placeholder='Enter Description' name="description" id="" cols="" rows="6"></textarea>
                </div>

                <input type="submit" value="Update Product" className="btn btn-block bg-[#1536f0d4] text-white text-xl border mt-3 border-[#2c2cff] hover:text-[#2c2cff] hover:bg-white" />
            </form>

        </div>
    );
};

export default UpdateProduct;