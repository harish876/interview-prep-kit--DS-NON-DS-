(* OCaml Book Questions*)

(* Last element of a list*)
let rec last lst =
  match lst with
  | [] -> None
  | [ x ] -> Some x
  | _ :: t -> last t
;;

let () = assert (last [ 1; 2; 3; 4 ] = Some 4)
let () = assert (last [] = None)

(* Last 2 elements of a list*)
let rec last_two lst =
  match lst with
  | [] | [ _ ] -> None
  | [ x; y ] -> Some (x, y)
  | _ :: t -> last_two t
;;

let () = assert (last_two [ 1; 2; 3; 4 ] = Some (3, 4))
let () = assert (last_two [ 1 ] = None)

(*nth element of a list  - revisit later*)
let nth lst n = if n >= List.length lst || n < 0 then None else Some (List.nth lst n)
let () = assert (nth [ 1; 2; 3; 4 ] 0 = Some 1)
let () = assert (nth [ 1 ] 2 = None)

(* length of a list *)
let length lst =
  let rec aux lst len =
    match lst with
    | [] -> len
    | _ :: t -> aux t (len + 1)
  in
  aux lst 0
;;

let () = assert (length [ 1; 2; 3; 4 ] = 4)
let () = assert (length [] = 0)

(* Reverse a lst*)
let reverse lst =
  let rec aux lst acc =
    match lst with
    | [] -> acc
    | h :: t -> aux t (h :: acc)
  in
  aux lst []
;;

let () = assert (reverse [ 1; 2; 3; 4 ] = [ 4; 3; 2; 1 ])
let () = assert (reverse [] = [])

(* Palindrome *)
let is_pal lst = lst = List.rev lst
let () = assert (is_pal [ "a"; "b"; "a" ] = true)
let () = assert (is_pal [ "a"; "b" ] = false)

(* RLE *)
let encode lst =
  let rec aux count acc = function
    | [] -> []
    | [ x ] -> (count + 1, x) :: acc (* (count + 1,x) gets appended to the head of acc*)
    | a :: (b :: _ as t) ->
      if a = b then aux (count + 1) acc t else aux 0 ((count + 1, a) :: acc) t
  in
  List.rev (aux 0 [] lst)
;;

let () =
  let result =
    encode [ "a"; "a"; "a"; "a"; "b"; "c"; "c"; "a"; "a"; "d"; "e"; "e"; "e"; "e" ]
  in
  List.iter
    (fun (count, ch) ->
      print_int count;
      print_string ch;
      print_string " ")
    result;
  print_newline ()
;;
