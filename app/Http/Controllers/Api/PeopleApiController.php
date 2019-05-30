<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\People;

class PeopleApiController extends Controller
{
    
    private $people;
   	
   	public function __construct(People $p)
   	{
   		$this->people = $p;
   	}

   	public function peopleList()
	{
		$data = $this->people->paginate(5);

		return response()->json($data);
	}
}
