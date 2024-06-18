<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\http\Request;


class CategoryController extends Controller
{
    public function index()
    {
       $categories = Category::with('products')->get();
       return response()->json($categories);
    }
    public function show($id)
    {
        $category = Category::with('products')->find($id);
        if (!$category) {
            return response()->json(['error' => 'Categoria não encontrada'], 500);
        }
        return response()->json($category);
    }

    public function store(CategoryRequest $request)
    {
        $validated = $request->validated();

        $category = new Category();
        $category->name = $validated['name'];
        $category->description = $validated['description'];

        if($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->storeAs('public/categories', $filename);
            $category->avatar = $filename;
        }

    }

    public function update(CategoryRequest $request, $id)
    {
        $validated = $request->validated();

        $category = Category::findOrFail($id);
        $category -> name = $validated['name'];
        $category -> description = $validated['description'];

        if ($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->storeAs('public/categories', $filename);
            $category->avatar = $filename;
        }

        $category->save();

        return response()->json([
            'success' => true,
            'message' => 'Categoria criada com sucesso',
            'category' => $category
        ],201);
    }

    public function destroy(string $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['error' => 'Categoria não encontrada'], 500);
        }

        $category->delete();

        return response()->json(['message' => 'Categoria deletada']);
    }
}
