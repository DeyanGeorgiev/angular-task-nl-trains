
# Feedback

I decided to implement this task with **GMaps** (because in `JSON` for every device have _**lat**_ and _**lng**_).
This is useful for operator to see where they are located on world map (in this case NL ).
Because they are a lot in some quadrants I group them in clusters – when operator click on the cluster will be zoomed deeply ...deeply to the location of the device . Every device have title – id ( if have ) visible when you point mouse on the marker (tooltip), on click is shown the desired information.

---

I had two issues for this task :

* To receive good valid key from google maps api – I was asked to put my credit card ( billing information) to receive it - I didn't put this information and now maps on start show some message , inside have stamp ___“development purpose “___ , but if you put **valid api key** (with billing information) these things will disappeared.

* Angular not allowed me to start project in the root directory , because the directory name has underline **“_”** . I had bad experience with GitLab with renaming name for folders (capital/small letters or symbols)  which I'm not the creator . Because that reason  I create one directory deep from the root ( sorry , I don't want to risk and to rename project name ).

---

This task cost me (approximately ) upper limit of hours actual coding mentioned in the task description.



### Development server

 From root `cd ng-task-dgergov` then run `ng serve` for a dev server.
