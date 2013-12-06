# Pretty filename

Create a pretty filename from an unsafe string.

# Example

    require('pretty-filename')('filj23-^$24 t4.ex??t'); // 'filj23-24 t4.ext'

# Details

We keep alphanumeric characters, -, _, a space and a dot. We trim space from the start and the end, and we also do not end with a dot.
