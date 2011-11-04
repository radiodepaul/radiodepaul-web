using System;
using System.Collections.Generic;
using System.Collections;
//using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Diagnostics;

using System.Xml;

// for the random image generator
using System.IO;



public partial class _Default : System.Web.UI.Page
{
    /// <summary>
    /// Count the number of lines in the file specified.
    /// </summary>
    /// <param name=f>The filename to count lines in.</param>
    /// <returns>The number of lines in the file.</returns>
    static int CountLinesInFile(string f) {
        int count = 0;
        using (StreamReader r = new StreamReader(f))
        {
            string line;
            while ((line = r.ReadLine()) != null)
            {
                count++;
            }
        }
        return count;
    }
    // spits out a random image & its promotional URL
    public Hashtable chooseImage()
    {
        // code to spit out random image in directory
        /*
        string pageRoot = "/";
        string path = Server.MapPath(pageRoot + "/img/random_images/");
        string[] files = Directory.GetFiles(path);
        Random r = new Random();
        FileInfo fi = new FileInfo(files[r.Next(0, files.Length)]);
        return pageRoot + "/img/random_images/" + fi.Name;
        */

        // read random line from file
        //string promosDbFilePath = Server.MapPath("/radio_depaul/trunk/random_images/promos.txt");
        string promosDbFilePath = Server.MapPath("/img/random_images/promos_dup.txt");
        int promosDbNumLines = CountLinesInFile(promosDbFilePath);
        Random r = new Random();
        int promosDbFileLine = r.Next(0, promosDbNumLines);
        string line = "";
        System.IO.StreamReader promosStream = new System.IO.StreamReader(promosDbFilePath);
        for (int i = 0; i <= promosDbFileLine; i++)
        {
            line = promosStream.ReadLine();
        }

        //Console.WriteLine(promosDbNumLines);

        //Debug.WriteLine(line);

        // get image path and promo url from file
        string[] imgAndPromoUrlArr = line.Split('\t');
        Hashtable imgAndPromoUrlHash = new Hashtable();
        imgAndPromoUrlHash.Add("imagePath", imgAndPromoUrlArr[0]);
        imgAndPromoUrlHash.Add("promoUrl", imgAndPromoUrlArr[1]);
        Uri uri = new Uri(imgAndPromoUrlArr[1]);
        String domain = uri.Host;
        imgAndPromoUrlHash.Add("domain", domain);
        imgAndPromoUrlHash.Add("title", imgAndPromoUrlArr[2]);

        return imgAndPromoUrlHash;
    }
}