File obj = new File("a.txt")

// CLeans the File
printf "Contents of the Files are \n"

new File("").eachFile { file ->

    if (file.name.endsWith(".txt"))
    {
        obj.append( new File(file.toString()).readLines() )
        obj.append "\n"
    }
}

println "Done Editing File"