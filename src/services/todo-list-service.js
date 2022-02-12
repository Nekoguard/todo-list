export default class TodoListService {
  _apiBase = "https://jsonplaceholder.typicode.com/todos";

  getTodos = async () => {
    const res = await fetch(`${this._apiBase}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };
}
